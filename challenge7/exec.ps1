# Define the string to be echoed
$stringToEcho = "5 17 10 2 4 1 2"

# Get the language from the second argument
$language = $args[0]

# Set up the process start info
$psi = New-Object System.Diagnostics.ProcessStartInfo

switch ($language) {
    "js" {
        $psi.FileName = "node"
        $psi.Arguments = "challenge7.js"
    }
    "py" {
        $psi.FileName = "python"
        $psi.Arguments = "challenge7.py"
    }
    "c" {
        $psi.FileName = "gcc"
        $psi.Arguments = "challenge7.c -o challenge7"
        $process = [System.Diagnostics.Process]::Start($psi)
        $process.WaitForExit()
        $psi.FileName = "./challenge7"
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

    # Define the expected result
    $expectedResult = 0
    $numbers = $stringToEcho.Split(' ')
    foreach ($number in $numbers) {
        $num = [int]$number # convert string to integer
        if ($num % 2 -eq 0) {
            $expectedResult += [math]::Pow($num, 2)
        }
    }
    $expectedResult = $expectedResult % 51

    # Check the output of the process
    if ($output.Trim() -eq "$expectedResult") {
        Write-Output "Yay, you passed!"
    } else {
        Write-Output "You messed up."
    }
} else {
    Write-Error "Failed to start the process."
}
