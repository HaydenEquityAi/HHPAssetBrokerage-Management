# Script to remove Veo watermark from hero video
# Requires FFmpeg to be installed and in PATH

$inputFile = "public/images/Subtle_Hero_Background_Animation_Generated.mp4"
$outputFile = "public/images/Subtle_Hero_Background_Animation_Generated_no_watermark.mp4"
$backupFile = "public/images/Subtle_Hero_Background_Animation_Generated_backup.mp4"

Write-Host "Checking for FFmpeg..." -ForegroundColor Yellow

# Check if FFmpeg is available
try {
    $ffmpegVersion = ffmpeg -version 2>&1 | Select-Object -First 1
    if ($LASTEXITCODE -ne 0) {
        throw "FFmpeg not found"
    }
    Write-Host "FFmpeg found!" -ForegroundColor Green
} catch {
    Write-Host "ERROR: FFmpeg is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install FFmpeg from: https://www.gyan.dev/ffmpeg/builds/" -ForegroundColor Yellow
    Write-Host "Or use Chocolatey: choco install ffmpeg" -ForegroundColor Yellow
    exit 1
}

# Check if input file exists
if (-not (Test-Path $inputFile)) {
    Write-Host "ERROR: Input file not found: $inputFile" -ForegroundColor Red
    exit 1
}

Write-Host "Creating backup of original video..." -ForegroundColor Yellow
Copy-Item $inputFile $backupFile -Force

Write-Host "Cropping video to remove watermark..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Yellow

# Crop command - removes bottom 20px to eliminate watermark
# Adjust crop values if needed: crop=width:height:x:y
# This assumes 1920x1080 video - adjust if different
ffmpeg -i $inputFile -vf "crop=1920:1060:0:0" -c:v libx264 -preset medium -crf 23 -c:a copy $outputFile

if ($LASTEXITCODE -eq 0) {
    Write-Host "Success! Watermark removed." -ForegroundColor Green
    Write-Host "Replacing original file..." -ForegroundColor Yellow
    Move-Item -Force $outputFile $inputFile
    Write-Host "Done! Original backed up to: $backupFile" -ForegroundColor Green
} else {
    Write-Host "ERROR: FFmpeg processing failed." -ForegroundColor Red
    Write-Host "Original file preserved. Backup at: $backupFile" -ForegroundColor Yellow
    exit 1
}

