import iconUpload from '../assets/icon_upload.svg';

function SetPicture({ state, setState }) {

    function handleChange(picture) {

        const reader = new FileReader(); //new
        reader.addEventListener("load", function () {
            setState({ ...state, picture: reader.result })
        }, false);

        if (picture) {
            reader.readAsDataURL(picture);
        }
        // Previous code
        //setState({ ...state, picture: URL.createObjectURL(picture) })
    }

    return (
        <>
            <input onChange={(event) => handleChange(event.target.files[0])} type="file" id="getPicture" accept="image/*" />
            <label className='addBtn' htmlFor="getPicture"><img src={iconUpload} alt='upload icon' />Upload picture</label>
        </>
    )
};

export default SetPicture; 