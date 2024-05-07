function customRender(givenReactElement, givenMainContainer) {
    // Creating a new element and getting its info as an object
    const elementToAdd = document.createElement(givenReactElement.type);

    // Setting its attributes
    elementToAdd.innerHTML = givenReactElement.children;

    // Setting the attributes and its values
    for (const prop in givenReactElement.props) {
        elementToAdd.setAttribute(prop, givenReactElement.props[prop])
    }

    for (const styleProp in givenReactElement.props.style) {
        elementToAdd.style[styleProp] = givenReactElement.props.style[styleProp]
    }

    // Appending the child to the div/container
    givenMainContainer.appendChild(elementToAdd);
    console.log(givenMainContainer);

    console.log('\n');
}

// React tries to make a tree of every element
const reactElement1 = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const reactElement2 = {
    type: 'h1',
    props: {
        style: {
            backgroundColor: 'black',
            color: 'white'
        }
    },
    children: 'Main Heading'
}

const reactElement3 = {
    type: 'p',
    props: {
        style: {
            backgroundColor: 'green',
            color: 'white'
        }
    },
    children: 'My paragraph'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement1, mainContainer);
customRender(reactElement2, mainContainer);
customRender(reactElement3, mainContainer);