# Define the string to be echoed (array of integers)
$stringToEcho = "6 8 1 4 1 2"

# Get the language from the second argument
$language = $args[0]

# Set up the process start info
$psi = New-Object System.Diagnostics.ProcessStartInfo

switch ($language) {
    "js" {
        $psi.FileName = "node"
        $psi.Arguments = "challenge5.js"
    }
    "py" {
        $psi.FileName = "python"
        $psi.Arguments = "challenge5.py"
    }
    "c" {
        $psi.FileName = "gcc"
        $psi.Arguments = "challenge5.c -o challenge5"
        $process = [System.Diagnostics.Process]::Start($psi)
        $process.WaitForExit()
        $psi.FileName = "./challenge5"
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
    # Write the input string to the process's standard input stream
    $process.StandardInput.WriteLine($stringToEcho)
    $process.StandardInput.Close()

    # Capture the standard output
    $output = $process.StandardOutput.ReadToEnd()
    $process.WaitForExit()

    if (!$output -or $output -eq "") {
        Write-Error "No output received from the process. You messed up."
        exit
    }

    # Check the output of the process
    $outputNumber = [int]::Parse($output.Trim())
    if ($outputNumber -eq 20) {
        Write-Output "Yay, you passed!"
    }
    else {
        Write-Output "You messed up."
        Write-Output "Output: $outputNumber"
    }
}
else {
    Write-Error "Failed to start the process."
}
