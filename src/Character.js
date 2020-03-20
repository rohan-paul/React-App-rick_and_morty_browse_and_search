import React from "react"

const Character = ({ character, chooseCharacter }) => {
  const imageAlt = `${character.name}'s Profile Pic`

  return (
    <button
      onClick={() => chooseCharacter(character.id)}
      className="w-1/5 mr-1 mb-1 overflow-hidden relative cursor-pointer"
    >
      <img className="object-contain" src={character.image} alt={imageAlt} />
      <h3 className="absolute bottom-0 text-center w-full bg-green-700 text-xs px-2 py-1">
        {character.name}
      </h3>
    </button>
  )
}

export default Character
