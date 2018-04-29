class clonerClass {
    public deepClone(sourceObject) {
        const sourceAsJSON = JSON.stringify(sourceObject);
        return JSON.parse(sourceAsJSON);
    }
}

const cloner: clonerClass = new clonerClass();
export default cloner;
