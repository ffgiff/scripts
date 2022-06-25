const LocalInstallerScript = include("engines.wine.quick_script.local_installer_script");

new LocalInstallerScript()
    .name("Sid Meier's Civilization IV: The Complete Edition")
    .editor("Firaxis Games / 2K Games")
    .applicationHomepage("https://www.gog.com/game/sid_meiers_civilization_iv_the_complete_edition")
    .author("ffgiff")
    .category("Games")
    .executable("Civilization4.exe")
    .executable("Civ4BeyondSword.exe")
    .executable("Civ4Warlords.exe")
    .executable("Colonization.exe")

