const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect( () => {
        document.title = `${title} - Doc House`;
    }, [title])
}

export default useTitle;