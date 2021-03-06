import 'angular2-universal-polyfills/node';

import { assert } from 'chai';

import * as path from 'path';
import * as fs from 'fs';

import { AppModule } from '../example/app/app.module.node';
import { createRender } from '../src';

describe('createRender()', () => {
  const document = fs.readFileSync(path.resolve(process.cwd(), './example/index.html'), 'utf-8');
  
  describe('Rendering with minimum options.', () => {
    var render;
    
    it('Should get render function with minimum options.', () => {
      render = createRender({
        document: document,
        ngModule: AppModule
      });
      
      assert.equal(typeof render, 'function');
    });
    
    it('Shoud render with request url.', () => {
      return render({ requestUrl: '/page1' })
      .then(html => {
        assert.equal(typeof html, 'string');
      });
    });
    
    it('Shoud render with other request url.', () => {
      return render({ requestUrl: '/page2' })
      .then(html => {
        assert.equal(typeof html, 'string');
      });
    });
    
  });
  
});
