export const getDataForTable = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
}

export const postDataForTable = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: data
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
};