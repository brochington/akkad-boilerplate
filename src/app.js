import React, {Component} from 'react';
import {Akkad, Scene, Material, cameras, lights, shapes, systems} from 'akkad';

const {ArcRotateCamera} = cameras;
const {HemisphericLight} = lights;
const {Box} = shapes;
const {Color} = systems;

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Akkad boilerplate</h1>
                <Akkad>
                    <Scene>
                        <ArcRotateCamera
                            position={[3, 4, -5]}
                            target={[0, 1, 0]}
                        />
                        <HemisphericLight />
                        <Box>
                            <Material>
                                <Color color={[0.2, 0.5, 0.7]} />
                            </Material>
                        </Box>
                    </Scene>
                </Akkad>
            </div>
        )
    }
}

export default App;
