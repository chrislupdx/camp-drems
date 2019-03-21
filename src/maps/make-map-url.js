export default function makeMapurl(latLon) {
    const path = `https://maps.googleapis.com/maps/api/staticmap?size=600x300&maptype=road&markers=size:small|color:red|${latLon}&key=AIzaSyC5yJb3hg67IT1ooaA091M9-YUUbF_-svw`;
<<<<<<< HEAD
=======

>>>>>>> a6d1c81220e14cd0dd70eba02dc3d6e558f9b725
    const url = new URL(path);
    return url.toString();
}