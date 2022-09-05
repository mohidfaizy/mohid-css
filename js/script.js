/////////////////////////////
////// JIT Compilation //////
/////////////////////////////

// Fetching all elements of document
const jitEveryElement = document.body.getElementsByTagName("*");

// Object to particular jit classes
const jitAllowedProps = {
  "color": "color",
  "background": "bg",
  "background-color": "bg-clr",
  "background": "bg-img",
  'font-size': "font-size",
  "font-weight": "font-weight",
};

// Function to check jit element
const jitCheck = () => {};

// Loop to check every element
for (let jitIndex = 0; jitIndex <= jitEveryElement.length; jitIndex++) {
    jitTriggeredElement = jitEveryElement[jitIndex];
    jitTriggeredElementClasses = jitTriggeredElement.classList;
    jitTriggeredElementClasses.forEach((jitTriggered) => {
        // Checking if any JIT class exists
        Object.entries(jitAllowedProps).forEach((jitAllowedClass) => {
            const [jitAllowedClassKey, jitAllowedClassValue] = jitAllowedClass;
            const jitAllowedPropsPattern = new RegExp(jitAllowedClassValue, "g");
            if(jitTriggered.match(jitAllowedPropsPattern)){
                // Getting the value of particular JIT property value
                let jitTriggeredElementClassValue = jitTriggered.match(/(\[)[# \w . ( )]+/g);
                jitTriggeredElementClassValue = jitTriggeredElementClassValue[0].substr( 1, jitTriggeredElementClassValue[0].length);

                console.log(jitAllowedClassKey,jitTriggeredElementClassValue);

                jitTriggeredElement.style.setProperty(jitAllowedClassKey, jitTriggeredElementClassValue);
            }
        });
    });
}
