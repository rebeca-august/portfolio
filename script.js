const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-bar ul a");

const removeAllActiveClasses = () => {
    for (const item of navItems) {
        item.classList.remove("active");
    }
};

const callback = (entries) => {
    const intersectingEntry = entries.find(entry => entry.intersectionRatio > 0.3);
    if (intersectingEntry) {
        const targetId = intersectingEntry.target.id;
        const navItem = document.querySelector(`ul a[href="#${targetId}"]`);

        removeAllActiveClasses();

        navItem.classList.add("active");
    }
};

const options = {
    root: document,
    threshold: [0.3, 0.5, 0.7]
};

const observer = new IntersectionObserver(callback, options);

for (const page of pages) {
    observer.observe(page);
}
