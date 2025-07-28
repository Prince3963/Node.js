const fetchData = async () => {
    const res = await fetch('https://www.google.com');
    const txt = await res.text();
    console.log(txt.substring(0, 400));
};

fetchData();
