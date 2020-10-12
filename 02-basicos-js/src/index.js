
// const getImagenPromesa = () => new Promise( resolve => resolve('http://7sjhsdfgysdsnj.com/jasdnj'));

// getImagenPromesa().then(console.log)

const getImagen = async () => {

  try {
    const apiKey = 'znwbvNOLnkEPXRn2Ohoq27pL5UVLQ9lf';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const { data } = await resp.json();

    const { url } =  data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append( img );
  } catch (error) {
    console.warn('Hay un error');
  }

  
 
  
}

getImagen()

