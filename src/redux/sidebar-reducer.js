
let initialState = {
    friendsBoard: [
        {
            name: "Arkadii",
            online: true,
            avatar:
                "https://images.squarespace-cdn.com/content/5459ec52e4b04d305f68f1ed/1419199045634-OLP6CD2JW2HDVBOFA657/?format=1000w&content-type=image%2Fjpeg"
        },
        {
            name: "Dimich",
            online: false,
            avatar:
                "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fmymodernmet.com%2Fwp%2Fwp-content%2Fuploads%2Farchive%2FrEqgUD5LXqnxjXB08ceW_1082054268.jpeg&f=1&nofb=1"
        },
        {
            name: "Nikola",
            online: true,
            avatar:
                "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.highsnobiety.com%2Fwp-content%2Fuploads%2F2015%2F06%2F10-biggest-hip-hop-stars-got-rap-names-main-480x320.jpg&f=1&nofb=1"
        }
    ],
}

const sidebarReducer = (state = initialState,action) => {

    return state;
}

export default sidebarReducer;