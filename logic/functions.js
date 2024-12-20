//import  { items } from "./items.js";

function oot_has_child_sword(){
    if (items.oot_kokiri_sword){ //or oot_razor or oot_gilded when added
        return true;
    }
    else return false;
}

function oot_has_adult_sword(){
    if (items.oot_master_sword || items.oot_biggorons_sword){
        return true;
    }
    else return false;
}

function oot_has_explosives(){
    if (items.oot_bomb_bag1 || items.oot_bombchu) return true;
    else return false;
}

function oot_has_ocarina(){
    if(items.oot_fairy_ocarina || items.oot_ocarina_of_time) return true;
    else return false;
}

function can_time_change(){
    if(
        items.oot_master_sword // or Sot changes time + ocarina
    ) return true;
    else return false;
}

function oot_can_cut_grass(){
    if(
        oot_has_child_sword ||
        oot_has_explosives ||
        oot_has_adult_sword ||
        items.oot_boomerang ||
        items.oot_deku_stick || //with broken stick glitch
        items.oot_gorons_bracelet 
    ) return true;
    else return false;
}




