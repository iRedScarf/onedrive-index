const isHiddenFolder = (driveItem: any) => {
    const pattern = process.env.HIDDEN_FOLDERS_RGX as string;
    const rgx = new RegExp(pattern, "i");
    
    // Check if the file name exactly matches any of the predefined names
    if (driveItem.file && /(.password.png|readme.md)/i.test(driveItem.name)) {
      return true;
    }
    
    // Match whole word folder names only
    const folderNameRegex = new RegExp(`^(${pattern})$`, "i");
    
    return !driveItem.file && folderNameRegex.test(driveItem.name);
  }
  
  export default isHiddenFolder;
  