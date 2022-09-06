// Prefix for all classes
const mohidPrefix = "";

/////////////////////////////
////// JIT Compilation //////
/////////////////////////////

// Fetching all elements of document
const jitEveryElement = document.body.getElementsByTagName("*");

// Object to particular jit classes
let jitAllowedProps = {
  "color": mohidPrefix + "color",
  "background": mohidPrefix + "bg",
  "background-color": mohidPrefix + "bg-clr",
  "background-image": mohidPrefix + "bg-img",
  "font-size": mohidPrefix + "font-size",
  "font-weight": mohidPrefix + "font-weight",
  "width": mohidPrefix + "width",
  "height": mohidPrefix + "height",
  "maxWidth": mohidPrefix + "max-width",
  "maxHeight": mohidPrefix + "max-height",
  "minWidth": mohidPrefix + "min-width",
  "minHeight": mohidPrefix + "min-height"
};

// Loop to check every element
for (let jitIndex = 0; jitIndex <= jitEveryElement.length; jitIndex++) {
    jitTriggeredElement = jitEveryElement[jitIndex];
    if(jitTriggeredElement != null && jitTriggeredElement != undefined){
        jitTriggeredElementClasses = jitTriggeredElement.classList;
        jitTriggeredElementClasses.forEach((jitTriggered) => {
            // Checking if any JIT class exists
            Object.entries(jitAllowedProps).forEach((jitAllowedClass) => {
                const [jitAllowedClassKey, jitAllowedClassValue] = jitAllowedClass,
                jitAllowedClassPattern = new RegExp(jitAllowedClassValue + "-(\\[)([# \\w . ( )]+)(\\])", "g");
                console.log(jitAllowedClassPattern); // Checking if any element has jit class
                if(jitTriggered.match(jitAllowedClassPattern)){
                    // Getting the value of particular JIT property value
                    let jitTriggeredElementClassValue = jitTriggered.match(/(\[)[# \w . ( )]+/g);
                    jitTriggeredElementClassValue = jitTriggeredElementClassValue[0].substr( 1, jitTriggeredElementClassValue[0].length);

                    console.log(jitAllowedClassKey,jitTriggeredElementClassValue);

                    jitTriggeredElement.style.setProperty(jitAllowedClassKey, jitTriggeredElementClassValue);
                }
            });
        });
    }
}
