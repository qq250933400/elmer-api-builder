import sourceConfig from '../config/source.config';

class initBuilder {
    run () {
        console.log(__dirname);
        if (sourceConfig) {
            const paths = sourceConfig.path || [];
            paths.map((pathString) => {
                console.log(pathString);
            });
        }
    }
}

export default initBuilder;
