function localStorageAdd(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

export default localStorageAdd;