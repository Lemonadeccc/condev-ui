export default function () {
  if (PROD) {
    const logo = `
_______________________________________________________________________________________________
                         .___                           .__                                __   
  ____  ____   ____    __| _/_______  __           ____ |  |   ____   _____   ____   _____/  |_ 
_/ ___\/  _ \ /    \  / __ |/ __ \  \/ /  ______ _/ __ \|  | _/ __ \ /     \_/ __ \ /    \   __\
\  \__(  <_> )   |  \/ /_/ \  ___/\   /  /_____/ \  ___/|  |_\  ___/|  Y Y  \  ___/|   |  \  |  
 \___  >____/|___|  /\____ |\___  >\_/            \___  >____/\___  >__|_|  /\___  >___|  /__|  
     \/           \/      \/    \/                    \/          \/      \/     \/     \/                              
_______________________________________________________________________________________________
                               author:Lemonadecc
`;

    const rainbowGradient = `
background: linear-gradient(135deg, orange 60%, cyan);
background-clip: text;
color: transparent;
font-size: 16px; 
line-height: 1;
font-family: monospace;
font-weight: 600;
`;

    console.info(`%c${logo}`, rainbowGradient);
  } else if (DEV) {
    console.log("[CdUI]:dev mode...");
  }
}
