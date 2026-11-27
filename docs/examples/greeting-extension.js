// SPDX-License-Identifier: MPL-2.0
// Copyright 2026 Hiroya Kubo
(function (Scratch) {
  'use strict';

  class PuraMokoLesson {
    getInfo() {
      return {
        id: 'puramokolesson',
        name: 'プラとモコのあいさつ',
        color1: '#6266df',
        blocks: [
          {
            opcode: 'greet',
            blockType: Scratch.BlockType.REPORTER,
            text: '[NAME] にあいさつ',
            arguments: {
              NAME: {type: Scratch.ArgumentType.STRING, defaultValue: 'モコ'}
            }
          },
          {
            opcode: 'greetLater',
            blockType: Scratch.BlockType.REPORTER,
            text: '[SECONDS] 秒後に [NAME] にあいさつ',
            arguments: {
              SECONDS: {type: Scratch.ArgumentType.NUMBER, defaultValue: 1},
              NAME: {type: Scratch.ArgumentType.STRING, defaultValue: 'プラ'}
            }
          }
        ]
      };
    }

    greet(args) {
      return Scratch.Cast.toString(args.NAME) + 'さん';
    }

    greetLater(args) {
      // This finite teaching example does not perform external work or claim timer cancellation.
      const seconds = Math.max(0, Math.min(2, Scratch.Cast.toNumber(args.SECONDS)));
      const message = this.greet(args);
      return new Promise(resolve => setTimeout(() => resolve(message), seconds * 1000));
    }
  }

  Scratch.extensions.register(new PuraMokoLesson());
})(Scratch);
