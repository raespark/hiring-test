import { useContext } from 'react';

import classnames from 'classnames';
import MattressContext from '../../contexts/selectedMattressContext';

import './styles.scss';

function OptionToggle() {
    const {
        currentMattressIndex,
        setSelectedMattress,
        mattressList,
    } = useContext(MattressContext);

    return (
        <div className="option-toggle-with-title">
            <h4 className="option-toggle-title">Select Mattress Type</h4>
            <div className="option-toggle">
                {mattressList.map((option, index) => (
                    <div
                        key={index}
                        className={classnames('option', {
                            selected: currentMattressIndex === index,
                        })}
                        onClick={() => {
                            setSelectedMattress(index);
                        }}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OptionToggle;
