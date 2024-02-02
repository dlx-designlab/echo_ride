@echo off
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| find "IPv4 Address"') do (
    for /f "tokens=*" %%b in ("%%a") do (
        echo export default "%%b"; > ip.js
    )
)
