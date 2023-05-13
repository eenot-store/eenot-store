(function (Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('EHOT Exit extension needs to be run unsandboxed');
  }

  class enotex-exit {
    getInfo () {
      return {
        id: 'enotex-exit',
        name: 'EHOT Exit',
        color1: '#3467eb',
        color2: '#4e7bed',
        color3: '#2d53b3',

        blocks: [
          {
            opcode: 'AndroidClose',
            text: 'Закртыь Android приложение',
            blockType: Scratch.BlockType.COMMAND,
          },
        ],
		
      };
    }

    AndroidClose {
      finish();
    }
  }

  Scratch.extensions.register(new enotex-exit());
})(window.Scratch);