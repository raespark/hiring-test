import { createContext } from 'react';

const mattressContextDefault = {
    mattressList: [],
    currentMattressIndex: 0,
    currentMattress: {},
    setSelectedMattress: (index) => {},
};

const MattressContext = createContext(mattressContextDefault);

export default MattressContext;
