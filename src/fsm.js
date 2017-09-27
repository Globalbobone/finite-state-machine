class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) { //++
        this.config = config;
        //this.transitions = config.transitions;
        this.initial = config.initial;
        this.state = config.initial;
        this.arrhistory = [];
        this.one = Object.keys(config.states);
        //this.two = Object.keys(this.one);
        //this.two = Object.keys(config.states[0]);
        //this.mystates = Object.keys(config.states);
        //this.transitions = Object.keys(config.transitions);    
        //this.statesArr = Object.entries(config.states);
    }
    /**
     * Returns active state.
     * @returns {String}
     */
    getState() { //++
        return this.state;
        //this.hystory.push(this.state);
    }
    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) { //+-
        //this.state = state;
        if (this.state === this.one) {
            throw Error;
        }
        else {
            this.state = state;
            this.arrhystory.push(this.state);
        }
        //this.state = state;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) { //--
        this.state = this.config.states[this.state].transitions[event];
        this.arrhistory.push(this.state);
    }

    /**
     * Resets FSM state to initial.
     */
    reset() { //--
        return this.state = this.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) { //--
        if (event = this.config.states[this.state].transitions[event]) {
            return event;
        }
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() { //+-
        if (this.arrhistory.length > 1) {
            this.state = this.arrhistory[this.arrhistory.length-1];
            return true;
        }
        else {
            return false;
        }           
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() { //+-
        if (this.arrhistory.length > 0) {
            this.state = this.arrhistory[this.arrhistory.length];
            return true;
        }
        else {
            return false;
        }           
    }

    /**
     * Clears transition history
     */
    clearHistory() { //++
        /*if (this.history.length === 0) {
            return true;   
         }
        else {
            return false;
         }*/
        this.arrhistory.length = 0;
        
    }
   
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
