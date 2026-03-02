#!/bin/bash

# 🚀 Automated Deployment Script for Allstate Document Upload
# This script helps you deploy to Cloudflare, Vercel, or Netlify

set -e  # Exit on any error

echo "🚀 Allstate Document Upload - Deployment Script"
echo "================================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version: $(node -v)"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    print_info "Installing dependencies..."
    npm install
    print_success "Dependencies installed"
else
    print_success "Dependencies already installed"
fi

# Build the project
print_info "Building project..."
npm run build

if [ ! -d "dist" ]; then
    print_error "Build failed. dist directory not found."
    exit 1
fi

print_success "Project built successfully"

echo ""
echo "Select deployment platform:"
echo "1) Cloudflare Pages (Recommended)"
echo "2) Vercel"
echo "3) Netlify"
echo "4) Cancel"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        print_info "Deploying to Cloudflare Pages..."
        echo ""
        
        # Check if wrangler is installed
        if ! command -v wrangler &> /dev/null; then
            print_warning "Wrangler CLI not found. Installing..."
            npm install -g wrangler
        fi
        
        # Login to Cloudflare
        print_info "Please login to Cloudflare..."
        wrangler login
        
        # Deploy
        print_info "Deploying to Cloudflare Pages..."
        wrangler pages deploy dist --project-name=allstate-document-upload
        
        print_success "Deployment complete!"
        echo ""
        print_info "Your site is live at: https://allstate-document-upload.pages.dev"
        ;;
        
    2)
        echo ""
        print_info "Deploying to Vercel..."
        echo ""
        
        # Check if vercel is installed
        if ! command -v vercel &> /dev/null; then
            print_warning "Vercel CLI not found. Installing..."
            npm install -g vercel
        fi
        
        # Deploy
        print_info "Starting Vercel deployment..."
        vercel --prod
        
        print_success "Deployment complete!"
        ;;
        
    3)
        echo ""
        print_info "Deploying to Netlify..."
        echo ""
        
        # Check if netlify is installed
        if ! command -v netlify &> /dev/null; then
            print_warning "Netlify CLI not found. Installing..."
            npm install -g netlify-cli
        fi
        
        # Login to Netlify
        print_info "Please login to Netlify..."
        netlify login
        
        # Deploy
        print_info "Deploying to Netlify..."
        netlify deploy --prod --dir=dist
        
        print_success "Deployment complete!"
        ;;
        
    4)
        print_info "Deployment cancelled"
        exit 0
        ;;
        
    *)
        print_error "Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "================================================"
print_success "Deployment process completed!"
echo ""
print_info "Next steps:"
echo "  • Test your live site"
echo "  • Set up custom domain (optional)"
echo "  • Configure automatic deployments from GitHub"
echo ""
print_info "For more details, see DEPLOYMENT.md"
echo ""
