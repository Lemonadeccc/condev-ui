#!/usr/bin/env node

import { execSync } from "child_process";
import { platform } from "os";

/**
 * Check if act command is installed in the system
 * If not, install it automatically based on the operating system
 */
function checkAndInstallAct() {
  try {
    // Try to execute act command to check if it's installed
    execSync("act --version", { stdio: "ignore" });
    console.log("✅ Act is already installed and ready to use");
  } catch (error) {
    console.log(
      error.message,
      "⚠️ Act command not found in the system, preparing to install..."
    );

    const osType = platform();

    try {
      if (osType === "win32") {
        console.log("🔄 Windows system: Installing act using winget...");
        execSync("winget install nektos.act", { stdio: "inherit" });
      } else if (osType === "darwin") {
        console.log("🔄 macOS system: Installing act using brew...");
        execSync("brew install act", { stdio: "inherit" });
      } else if (osType === "linux") {
        console.log(
          "🔄 Linux system: Please install act manually, see: https://github.com/nektos/act#installation"
        );
        console.log(
          "For example using: curl https://raw.githubusercontent.com/nektos/act/master/install.sh | sudo bash"
        );
      } else {
        console.log("❌ Unsupported operating system:", osType);
        console.log(
          "Please install act manually: https://github.com/nektos/act#installation"
        );
      }
    } catch (installError) {
      console.error(
        "❌ Installation failed, please install act manually: https://github.com/nektos/act#installation"
      );
      console.error("Error details:", installError.message);
      process.exit(1);
    }
  }
}

checkAndInstallAct();
