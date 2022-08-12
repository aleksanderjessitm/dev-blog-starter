import {create} from 'jss';
import jssPluginSyntaxNested from 'jss-plugin-nested';

const jss = create({insertionPoint: "jss-insertion-point"});

jss.use(jssPluginSyntaxNested())

const sheet = jss.createStyleSheet({
    body: {
        "background-color": "pink" 
    }
});

export const renderedSheet = sheet.attach()



