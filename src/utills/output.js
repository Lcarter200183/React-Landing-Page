import { output } from "./utills";

export function output(
    message = "",
    outputTag = "outputTag",
    shouldAppend = true
) {
    if (shouldAppend) window[outputTag.innerHTML];
    else window[outputTag].innerHTML = message;
}