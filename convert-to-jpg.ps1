# PowerShell script to convert PNG to optimized JPG with 90% quality

Add-Type -AssemblyName System.Drawing

$directories = @(
    ".\public\images\food",
    ".\public\images\cafe"
)

Write-Host "Starting PNG to JPG conversion..." -ForegroundColor Green
Write-Host ""

$totalOriginalSize = 0
$totalNewSize = 0

foreach ($dir in $directories) {
    if (Test-Path $dir) {
        Write-Host "Processing: $dir" -ForegroundColor Cyan
        
        $pngFiles = Get-ChildItem -Path $dir -Filter "*.png"
        
        foreach ($file in $pngFiles) {
            try {
                $originalSize = $file.Length
                $totalOriginalSize += $originalSize
                
                $image = [System.Drawing.Image]::FromFile($file.FullName)
                $jpgFileName = [System.IO.Path]::ChangeExtension($file.FullName, ".jpg")
                
                $jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
                $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
                $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 90L)
                
                $image.Save($jpgFileName, $jpegEncoder, $encoderParams)
                $image.Dispose()
                
                $newSize = (Get-Item $jpgFileName).Length
                $totalNewSize += $newSize
                
                Write-Host "  Converted: $($file.Name)" -ForegroundColor Green
                
                Remove-Item $file.FullName -Force
                
            } catch {
                Write-Host "  Error: $($file.Name)" -ForegroundColor Red
            }
        }
        
        Write-Host ""
    }
}

Write-Host "Conversion Complete!" -ForegroundColor Green
$totalOrigMB = [math]::Round($totalOriginalSize/1MB, 2)
$totalNewMB = [math]::Round($totalNewSize/1MB, 2)
$totalSavings = [math]::Round((1 - ($totalNewSize / $totalOriginalSize)) * 100, 1)

Write-Host "Original: $totalOrigMB MB" -ForegroundColor Cyan
Write-Host "New: $totalNewMB MB" -ForegroundColor Cyan
Write-Host "Savings: $totalSavings%" -ForegroundColor Green
