export default function adapter(responseData) {
    return responseData.map(data => {
        const { ndbno, name, measure, weight } = data; // Get only required columns
        return { ndbno, name, measure, weight };
    })
}