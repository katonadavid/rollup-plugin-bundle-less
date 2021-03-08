import bundler from 'less-bundle';

export default function bundleLess ( options = {} ) {

    const { src = 'styles.less', dest = 'styles.less' } = options;

    return {
        name: 'bundle-less',
        closeBundle(){
            bundler({
                src,
                dest
            },
            ( err ) => {
                if( err ) {
                    console.log(err);
                }
            })
        }
    }
}