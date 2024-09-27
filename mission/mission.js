const themeSelector = document.querySelector('select');
function changeTheme() {
    const current_theme = themeSelector.value;
    // check to see what the current value of our select is.
    // The current value is conveniently found in themeSelector.value!
    if (current_theme === 'dark'){
        const body_content = document.querySelector('body');
        body_content.classList.add('dark');
        const logo = document.querySelector('img');
        logo.setAttribute('src', 'byui-logo_white.png');

    } else {
        const body_content = document.querySelector('body');
        body_content.classList.remove('dark');
        const logo = document.querySelector('img');
        logo.setAttribute('src', 'byui-logo_blue.webp');

    };
    // if the value is dark then:
    // add the dark class to the body
    // change the source of the logo img to point to the white logo.
    // otherwise
    // remove the dark class
    // make sure the logo src is the blue logo.
    }
    
    // add an event listener to the themeSelector element here.
    // Use the changeTheme function as the event handler function.
    themeSelector.addEventListener('change', changeTheme);
    