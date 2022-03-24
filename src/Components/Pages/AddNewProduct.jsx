import React, { Fragment, useState } from "react";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx'
import {
//<<<<<<< HEAD:src/Components/Pages/AddNewProduct.jsx
    TextField,
    makeStyles,
    Typography,
    Button,
    InputAdornment,
    CircularProgress,
/* =======
    TextField,
    makeStyles,
    Typography,
    Button,
    InputAdornment,
>>>>>>> parent of 7396376 (noum-frontend v0.3):src/Components/AddNewProduct.jsx */
} from "@material-ui/core";

import { postDataProduct, putDataProduct } from '../../redux/Actions/productActions'
import { useDispatch } from 'react-redux'

import { noumStore } from '../../baseStore'

const useStyles = makeStyles((theme) => ({
    //<<<<<<< HEAD:src/Components/Pages/AddNewProduct.jsx
    formStyle: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            maxWidth: "350px",
            display: "flex",
        },
    },
    input: {
        display: "none",
    },
    buttonSuccess: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700],
        }
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    },
/* =======
    formStyle: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            maxWidth: "350px",
            display: "flex",
        },
    },
    input: {
        display: "none",
    },
>>>>>>> parent of 7396376 (noum-frontend v0.3):src/Components/AddNewProduct.jsx */
}));

const imgLabel = {
    fontSize: "20px",
};
//<<<<<<< HEAD:src/Components/Pages/AddNewProduct.jsx
/* =======
const btnStyle = {
    marginLeft: "15px",
};
>>>>>>> parent of 7396376 (noum-frontend v0.3):src/Components/AddNewProduct.jsx */

const AddNewProduct = () => {

    const dispatch = useDispatch()
    const useClass = useStyles();

    const [data, setData] = useState({
        name: String,
        description: String,
        price_in_BOB: Number,
    });

    const ImgData = {
        imgUrl: String
    }

//<<<<<<< HEAD:src/Components/Pages/AddNewProduct.jsx
    const productData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [fileImg, setfileImg] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const loadBtn = clsx({
        [useClass.buttonSuccess]: success,
    });

    const btnAddProduct = (event) => {
        event.preventDefault()
        if (!loading) {
            setSuccess(false);
            setLoading(true);
        }
        data.price_in_BOB = parseFloat(data.price_in_BOB)
        dispatch(postDataProduct(data))
            .then(id => {
                const storageRef = noumStore.storage().ref()
                const fileRef = storageRef.child(`Products/${id}`)
                fileRef.put(fileImg)
                    .then(() => {
                        fileRef.getDownloadURL()
                            .then((data) => {
                                ImgData.imgUrl = data
                                dispatch(putDataProduct(id, ImgData))
                                event.target.reset()
                                setSuccess(true)
                                setLoading(false)
                            })
                    })
            })
    }

    const onChange = (e) => {
        const file = e.target.files[0]
        setfileImg(file)
    }

    return (
        <Fragment>
            <form className={useClass.formStyle} onSubmit={btnAddProduct}>
                <Typography variant="h5">Nuevo Producto</Typography>
                <div>
                    <TextField
                        type="text"
                        id="name"
                        label="Nombre de Producto"
                        onChange={productData}
                        name="name"
                        variant="filled"
                        required
                    />
                    <input
                        type="file"
                        onChange={onChange}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton
                            style={imgLabel}
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >    Subir una Imagen
                            <InsertPhotoIcon />
                        </IconButton>
                    </label>
                </div>
                <div>
                    <TextField
                        type="text"
                        id="filled-multiline-static"
                        label="Descripción"
                        multiline
                        rows={4}
                        onChange={productData}
                        name="description"
                        variant="filled"
                        required
                    />
                </div>
                <div>
                    <TextField
                        label="Precio"
                        InputProps={{
                            endAdornment: <InputAdornment position="start">BOB</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={productData}
                        name="price_in_BOB"
                        required
                    />
                </div>
                <div>
                    <Button
                        className={loadBtn}
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={loading}
                    >
                        Crear
                    </Button>
                    {success ? <CheckIcon /> : <SaveIcon />}
                    {loading && <CircularProgress size={24} className={useClass.buttonProgress} />}
                </div>
            </form>
        </Fragment>
    );
//=======
    /* const productData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const [fileImg, setfileImg] = useState(null)

    const btnAddProduct = (event) => {
        event.preventDefault()
        data.price_in_BOB = parseFloat(data.price_in_BOB)
        dispatch(postDataProduct(data))
            .then(id => {
                const storageRef = noumStore.storage().ref()
                const fileRef = storageRef.child(`Products/${id}`)
                fileRef.put(fileImg)
                    .then(() => {
                        fileRef.getDownloadURL()
                            .then((data)=>{
                                ImgData.imgUrl=data
                                dispatch(putDataProduct(id, ImgData))
                                event.target.reset()
                                console.log('Image Uploaded')
                                alert('Producto subido con exito!')
                            })
                    })

            })
    }

    const onChange = (e) => {
        const file = e.target.files[0]
        setfileImg(file)
    }

    return (
        <Fragment>
            <form className={useClass.formStyle} onSubmit={btnAddProduct}>
                <Typography variant="h5">Nuevo Producto</Typography>
                <div>
                    <TextField
                        type="text"
                        id="name"
                        label="Nombre de Producto"
                        onChange={productData}
                        name="name"
                        variant="filled"
                        required
                    />
                    <input
                        type="file"
                        onChange={onChange}
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton
                            style={imgLabel}
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                        >    Subir una Imagen
                            <InsertPhotoIcon />
                        </IconButton>
                    </label>
                </div>
                <div>
                    <TextField
                        type="text"
                        id="filled-multiline-static"
                        label="Descripción"
                        multiline
                        rows={4}
                        onChange={productData}
                        name="description"
                        variant="filled"
                        required
                    />
                </div>
                <div>
                    <TextField
                        label="Precio"
                        InputProps={{
                            endAdornment: <InputAdornment position="start">BOB</InputAdornment>,
                        }}
                        variant="filled"
                        onChange={productData}
                        name="price_in_BOB"
                        required
                    />
                </div>
                <div>
                    <Button
                        style={btnStyle}
                        className={useStyles.btn}
                        variant="contained"
                        color="primary"
                        //onClick={() => btnAddProduct()}
                        type="submit"
                    >
                        Crear
                    </Button>
                </div>
            </form>
        </Fragment>
    ); */
//>>>>>>> parent of 7396376 (noum-frontend v0.3):src/Components/AddNewProduct.jsx
};

export default AddNewProduct;
