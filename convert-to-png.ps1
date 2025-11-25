# PowerShell script to convert all JPG images to PNG format
# This script uses .NET System.Drawing to convert images

Add-Type -AssemblyName System.Drawing

$directories = @(
    ".\public\images\food",
    ".\public\images\cafe"
)

Write-Host "Starting image conversion to PNG format..." -ForegroundColor Green
Write-Host ""

foreach ($dir in $directories) {
    if (Test-Path $dir) {
        Write-Host "Processing directory: $dir" -ForegroundColor Cyan
        
        # Get all JPG files
        $jpgFiles = Get-ChildItem -Path $dir -Filter "*.jpg"
        
        foreach ($file in $jpgFiles) {
            try {
                # Load the image
                $image = [System.Drawing.Image]::FromFile($file.FullName)
                
                # Create PNG filename
                $pngFileName = [System.IO.Path]::ChangeExtension($file.FullName, ".png")
                
                # Save as PNG
                $image.Save($pngFileName, [System.Drawing.Imaging.ImageFormat]::Png)
                
                # Dispose of the image object
                $image.Dispose()
                
                Write-Host "  ✓ Converted: $($file.Name) -> $([System.IO.Path]::GetFileName($pngFileName))" -ForegroundColor Green
                
                # Delete the original JPG file
                Remove-Item $file.FullName -Force
                Write-Host "  ✓ Deleted original: $($file.Name)" -ForegroundColor Yellow
                
            } catch {
                Write-Host "  ✗ Error converting $($file.Name): $_" -ForegroundColor Red
            }
        }
        
        Write-Host ""
    } else {
        Write-Host "Directory not found: $dir" -ForegroundColor Red
    }
}

Write-Host "Conversion complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "- All JPG files have been converted to PNG format"
Write-Host "- Original JPG files have been deleted"
Write-Host "- Next step: Update code references from .jpg to .png"
