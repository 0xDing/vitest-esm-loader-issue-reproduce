import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { describe, test, expect } from "vitest"
import { render, screen } from '@testing-library/react'

describe("Example", () => { 
  test('should work', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <h1>Hello World</h1>
      </DndProvider>
    )

    expect(screen.getByText('Hello World')).toBeTruthy()
  })
})