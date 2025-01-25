# Define the string to be echoed
$stringToEcho = "Hello World"

# Get the language from the second argument
$language = $args[0]

# Set up the process start info
$psi = New-Object System.Diagnostics.ProcessStartInfo

switch ($language) {
    "js" {
        $psi.FileName = "node"
        $psi.Arguments = "challenge1.js"
    }
    "py" {
        $psi.FileName = "python"
        $psi.Arguments = "challenge1.py"
    }
    "c" {
        $psi.FileName = "gcc"
        $psi.Arguments = "challenge1.c -o challenge1"
        $process = [System.Diagnostics.Process]::Start($psi)
        $process.WaitForExit()
        $psi.FileName = "./challenge1"
    }
    default {
        Write-Error "Unsupported language: $language"
        exit
    }
}

$psi.RedirectStandardInput = $true
$psi.RedirectStandardOutput = $true
$psi.UseShellExecute = $false
$psi.CreateNoWindow = $true

# Start the process
$process = [System.Diagnostics.Process]::Start($psi)

# Check if the process started successfully
if ($process) {
    # Write the string to the input stream
    $process.StandardInput.WriteLine($stringToEcho)
    $process.StandardInput.Close()

    # Capture the standard output
    $output = $process.StandardOutput.ReadToEnd()
    $process.WaitForExit()

    # Check the output of the process
    $outputNumber = [int]::Parse($output.Trim())
    if ($outputNumber -ge 0 -and $outputNumber -lt 51) {
        Write-Output "Yay, you passed!"
    } else {
        Write-Output "You messed up."
    }
} else {
    Write-Error "Failed to start the process."
}
