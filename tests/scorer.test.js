import {expect} from 'chai'
import {calculteScore} from '../src/helpers/scorer'

describe('Scorer', () => {

  describe('FindScore', () => {

    it('should calculate score for word based on map', () => {
      expect(calculteScore("DECI")).to.eql(7)
      expect(calculteScore("PERPENDICULAR")).to.eql(20)
    })

  })

})
