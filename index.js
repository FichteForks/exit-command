const Command = require('command');

module.exports = function ExitCommand(dispatch) {
    const command = Command(dispatch);
    
    command.add(['exit', 'quit'], () => {
        dispatch.toServer('C_EXIT', 3, {});
    });

}
