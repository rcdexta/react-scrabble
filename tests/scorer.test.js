import {expect} from 'chai'
import scorer from '../src/helpers/scorer'

describe('Scorer', () => {

  describe('FindScore', () => {

    it('should calculate score for word based on map', () => {
      expect(scorer.calculate("DECI")).to.eql(7)
      expect(scorer.calculate("PERPENDICULAR")).to.eql(20)
    })

  })

})
