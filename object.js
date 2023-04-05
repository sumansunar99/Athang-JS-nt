let b = {
    shape: "round",
    length: "30cm",
    Storage: "7L",
    brand: "sina"
}
console.log(b);
console.log(b.length);
console.log(b["brand"]);

let sina = {
    name: "si",
    hobby: {
        game: "laptop"
    }
}
console.log(sina.hobby.game);

let computer = {
    ram: "9gb",
    rom: "1tb",
    Devicename: "DESKTOP-MKUTJEH",
    Processor: "Intel(R) Core(TM) i5-10400 CPU @ 2.90GHz   2.90 GHz",
    InstalledRAM: "8.00 GB (7.80 GB usable)",
    DeviceID: "1634F2D2-2679-4EB9-B666-1C28B7691AB9",
    ProductID: "00330-80000-00000-AA761",
    Systemtype: "64-bit operating system, x64-based processor",


    windowinfo:{
        EditionWindows:"10 Pro",
        Version:"22H2",
        OSbuild:"19045.2728",
    
    }

}
console.log(computer.windowinfo.OSbuild);