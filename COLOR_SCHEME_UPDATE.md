# Color Scheme Update - Allstate Branding

## Updated Color Palette (March 2, 2026)

### Primary Colors

1. **Dark Navy (Navigation/Header)**
   - Color: `#263E55`
   - Usage: Top navigation bar, header background
   - Matches the darker slate-blue from Allstate's digital account page

2. **Teal/Green (Primary Action Buttons ONLY)**
   - Primary: `#00a8a0`
   - Hover: `#008c85`
   - Usage: Action buttons only (Upload button text, Send button, Continue button)
   - Matches the teal/green buttons in Allstate's positive flow UI

3. **Royal Blue (Icons, Progress, Help Sections)**
   - Color: `#0033a1`
   - Usage: ALL icons, progress indicators, footer areas, help panels, info sections
   - The classic Allstate blue for visual elements and informational content

### Where Each Color is Applied

#### Dark Navy (#263E55)
- Top navigation bar background only

#### Teal (#00a8a0) - BUTTONS ONLY
- "Browse" button in upload zone
- "Send Documents" button
- "Continue" buttons in flow
- Success confirmation button
- All primary action buttons (the clickable buttons themselves)

#### Royal Blue (#0033a1) - ICONS & PROGRESS
- **Upload icon** (cloud icon in upload zone)
- **Active stepper state** (progress indicator background)
- **Accordion chevron** (when open)
- **All other icons** throughout the app
- Right panel help section background
- Footer help banners
- Premium comparison card header
- Confirmation page help banner
- Text links and labels
- File icons
- Document icons
- All decorative icons

### Visual Hierarchy

**Color Usage:**
- **Dark Navy**: Navigation background only
- **Teal**: Interactive buttons (click targets)
- **Royal Blue**: Everything else (icons, progress, info sections, highlights)

This creates a clear separation:
- **Dark header** = Navigation area
- **Teal buttons** = "Click here" actions
- **Blue icons & highlights** = Visual indicators and information

## Files Modified
- `src/styles/allstate.css` - Updated CSS variables and button colors

## Key Changes from Previous Version
- ✅ Reverted upload icon back to royal blue
- ✅ Reverted stepper active state back to royal blue  
- ✅ Reverted accordion chevron back to royal blue
- ✅ Kept action buttons as teal
- ✅ All icons remain royal blue
