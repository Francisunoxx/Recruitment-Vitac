<template>
  <div class="divContent">
    <div class="divFirstRow">
      <div class="divDetails">
        <div class="divLabel">
          <p>First Name</p>
        </div>
        <div class="divInput">
          <input type="text" />
        </div>
      </div>
      <div class="divDetails">
        <div class="divLabel">
          <p>Middle Name</p>
        </div>
        <div class="divInput">
          <input type="text" />
        </div>
      </div>
      <div class="divDetails">
        <div class="divLabel">
          <p>Last Name</p>
        </div>
        <div class="divInput">
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="divSecondRow">
      <div class="divHiringDetails">
        <div class="divLabel">
          <p>Type of Hire</p>
        </div>
        <input type="radio" name="hire" />
        <label for="internal">Internal Hire</label>
        <input type="radio" name="hire" />
        <label for="external">External Hire</label>
      </div>
      <div class="divHiringDetails">
        <div class="divLabel">
          <p>Assessment Taker Status</p>
        </div>

        <div class="divInput">
          <div>
            <input type="radio" name="assessment" />
            <label for="first"
              >It's my first time taking this assessment.</label
            >
          </div>
          <div>
            <input type="radio" name="assessment" />
            <label for="second"
              >It's my second time taking this assessment.</label
            >
          </div>
          <div>
            <input type="radio" name="assessment" />
            <label for="third"
              >I've taken this assessment multiple times before.</label
            >
          </div>
        </div>
      </div>
      <div class="divHiringDetails">
        <div class="divLabel">
          <p>Position Applying</p>
        </div>

        <div class="divInput">
          <div>
            <input type="radio" name="position" />
            <label for="first">Agent Captioner</label>
          </div>

          <div>
            <input type="radio" name="position" />
            <label for="first">Team Leader</label>
          </div>

          <div>
            <input type="radio" name="position" />
            <label for="first">Quality Coach</label>
          </div>

          <div>
            <input type="radio" name="position" />
            <label for="first">Language / Soft Skills Coach</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplicantProfile",
  computed: {}
};
</script>

<style scoped src="../css/ApplicantProfile.css" />
