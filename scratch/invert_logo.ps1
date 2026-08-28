Add-Type -AssemblyName System.Drawing
$sourcePath = "C:\Users\ASUS\.gemini\antigravity\brain\770b93ef-8cfe-47e8-95aa-2617390901fc\.user_uploaded\media_1787935180277.png"
$bmp = [System.Drawing.Bitmap]::FromFile($sourcePath)
$out = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)

for ($x = 0; $x -lt $bmp.Width; $x++) {
    for ($y = 0; $y -lt $bmp.Height; $y++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 20) {
            # Turn visible pixels black on white background
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 0, 0, 0))
        } else {
            $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, 255, 255, 255))
        }
    }
}
$out.Save("d:\AKU\Landing Page\assets\logos\logo-inverted-2.png")
$bmp.Dispose()
$out.Dispose()
Write-Output "Done"
