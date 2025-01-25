# Define the string to be echoed
$stringToEcho = "5 17 10 2 4 1 2"

# Get the language from the second argument
$language = $args[0]

# Set up the process start info
$psi = New-Object System.Diagnostics.ProcessStartInfo

switch ($language) {
    "js" {
        $psi.FileName = "node"
        $psi.Arguments = "challenge6.js"
    }
    "py" {
        $psi.FileName = "python"
        $psi.Arguments = "challenge6.py"
    }
    "c" {
        $psi.FileName = "gcc"
        $psi.Arguments = "challenge6.c -o challenge6"
        $process = [System.Diagnostics.Process]::Start($psi)
        $process.WaitForExit()
        $psi.FileName = "./challenge6"
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
    if ($output.Trim() -eq "17") {
        Write-Output "Yay, you passed!"
    } else {
        Write-Output "You messed up."
    }
} else {
    Write-Error "Failed to start the process."
}