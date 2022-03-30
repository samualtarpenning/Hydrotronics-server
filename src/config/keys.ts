export default {
development: {
    mongoUri: "mongodb+srv://hydromanager:G$zy9uwF6UHtn!i@hydro.8dhb5.mongodb.net/hydro_dev?retryWrites=true&w=majority",
    localdb : "mongodb://localhost:27017/hydro"
    },
production: {
    mongoUri: "mongodb://admin:SUPERSECRETPASSWORD@192.168.12.112:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
    },
    jwtSecret: "y73276yuewhuy34988934hjjdshyhu38328",
}