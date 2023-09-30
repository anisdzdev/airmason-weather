import { renderHook, act } from '@testing-library/react-hooks'
import { useFavorites } from '../../hooks/useFavorites'

describe('useFavorites', () => {
    beforeEach(() => {
        window.localStorage.clear();
    });

    test('should add to favorite if does not exist', () => {
        const {result} = renderHook(() => useFavorites())

        act(() => {
            result.current[1]('test', true)
        })

        expect(result.current[0]).toEqual(['test'])
    })

    test('should remove from favorites if called twice', () => {
        const {result} = renderHook(() => useFavorites())

        act(() => {
            result.current[1]('test', true)
        })
        act(() => {
            result.current[1]('test', true)
        })

        expect(result.current[0]).toEqual([])
    })
})