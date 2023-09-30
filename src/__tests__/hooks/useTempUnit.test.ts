import {act, renderHook} from '@testing-library/react-hooks'
import {useIsMetric} from '../../hooks/useTempUnit'

describe('useTempUnit', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('should default to metric', () => {
        const {result} = renderHook(() => useIsMetric())

        const [isMetric] = result.current;
        expect(isMetric).toEqual(true)
    })

    test('should switch to non-metric', () => {
        const {result} = renderHook(() => useIsMetric())

        act(() => {
            result.current[1]()
        })

        expect(result.current[0]).toEqual(false)
    })
})